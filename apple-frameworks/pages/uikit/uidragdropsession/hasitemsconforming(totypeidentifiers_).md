> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/hasitemsconforming(totypeidentifiers:)](https://developer.apple.com/documentation/uikit/uidragdropsession/hasitemsconforming(totypeidentifiers:))

# hasItemsConforming(toTypeIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.

## Declaration

```swift
func hasItemsConforming(toTypeIdentifiers typeIdentifiers: [String]) -> Bool
```

## Parameters

- `typeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a drag item in the session conforms to any UTI in the specified array; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking for drag items

- [canLoadObjects(ofClass:)](canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [items](items.md): An array of drag items in the drag session or drop session.

# hasItemsConformingToTypeIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.

## Declaration

```objectivec
- (BOOL) hasItemsConformingToTypeIdentifiers:(NSArray<NSString *> *) typeIdentifiers;
```

## Parameters

- `typeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a drag item in the session conforms to any UTI in the specified array; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking for drag items

- [canLoadObjectsOfClass:](canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [items](items.md): An array of drag items in the drag session or drop session.
