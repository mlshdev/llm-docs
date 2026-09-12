> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/parentintent](https://developer.apple.com/documentation/foundation/nspresentationintent/parentintent)

# parentIntent

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The parent of the current intent.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPresentationIntent * parentIntent;
```

## See Also

### Getting the intent identity

- [identity](identity.md): A unique identifier for the intent in the document.
- [intentKind](intentkind.md): The type of the intent.
- [isEquivalentToPresentationIntent:](isequivalenttopresentationintent_.md): Returns a Boolean value that indicates whether the current intent is equivalent to the specified intent.
