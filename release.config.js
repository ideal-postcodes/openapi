module.exports = {
  branches: [
    "main",
    { name: "beta", prerelease: true },
  ],
  tagFormat: "${version}",
  plugins: [
    // Analyze commits to determine release type
    "@semantic-release/commit-analyzer",

    // Generate release notes from commits
    "@semantic-release/release-notes-generator",

    // Create/update CHANGELOG.md (prepare step)
    "@semantic-release/changelog",

    // Create GitHub release (publish step)
    // Placed before npm so release is created even if npm publish fails
    "@semantic-release/github",

    // Update package.json version (prepare step)
    // Publish to npm registry (publish step)
    ["@semantic-release/npm", { provenance: true }],

    // Commit CHANGELOG.md and package.json, push to git (prepare step)
    "@semantic-release/git",
  ],
};
