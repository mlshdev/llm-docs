> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/equatable-implementations](https://developer.apple.com/documentation/appintents/syncableentityidentifier/equatable-implementations)

# Equatable Implementations

**Framework:** App Intents  
**Kind:** API Collection

## Topics

### Operators

- [==(\_:\_:)](==%28____%29.md): Conforms when `LocalID` conforms to `EntityIdentifierConvertible`, `LocalID` conforms to `Sendable`, `StableID` conforms to `EntityIdentifierConvertible`, and `StableID` conforms to `Sendable`. Two identifiers are equal when they have the same shape **and** the same values: both-local compares local IDs (ignoring stable), both-stable-only compares stable IDs. Mixed shapes (one has local, the other doesn’t) are never equal — this keeps the Hashable contract intact since each shape hashes a different component.
