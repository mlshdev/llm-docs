> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/isequivalenttopresentationintent:](https://developer.apple.com/documentation/foundation/nspresentationintent/isequivalenttopresentationintent:)

# isEquivalentToPresentationIntent:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean value that indicates whether the current intent is equivalent to the specified intent.

## Declaration

```objectivec
- (BOOL) isEquivalentToPresentationIntent:(NSPresentationIntent *) other;
```

## Parameters

- `other`: The other intent to use in the comparison.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current intent is equivalent to the specified intent, or [false](https://developer.apple.com/documentation/swift/false) if it isn’t.

<a id="Discussion"></a>

## Discussion

Two intents are equivalent if their attributes match. This method doesn’t consider the [identity](identity.md) property of the intents when determining their equivalence.

## See Also

### Getting the intent identity

- [identity](identity.md): A unique identifier for the intent in the document.
- [intentKind](intentkind.md): The type of the intent.
- [parentIntent](parentintent.md): The parent of the current intent.
