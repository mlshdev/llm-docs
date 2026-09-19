> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/anyuseridentity/init(_:)

# init(\_:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Initializes this type eraser with a user identity to wrap.

## Declaration

```swift
init<T>(_ userIdentity: T) where T : UserIdentity
```

## See Also

### Creating a user identity

- [init(from:)](init%28from_%29.md): Creates a new instance by decoding from the given decoder.
