> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstore/isreadonly](https://developer.apple.com/documentation/coredata/nspersistentstore/isreadonly)

# isReadOnly (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the persistent store is read-only.

## Declaration

```swift
var isReadOnly: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is read-only, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Store Attributes

- [identifier](identifier.md): The unique identifier for the persistent store.
- [url](url.md): The URL for the persistent store.

# readOnly (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the persistent store is read-only.

## Declaration

```objectivec
@property (getter=isReadOnly) BOOL readOnly;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is read-only, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Store Attributes

- [identifier](identifier.md): The unique identifier for the persistent store.
- [URL](url.md): The URL for the persistent store.
