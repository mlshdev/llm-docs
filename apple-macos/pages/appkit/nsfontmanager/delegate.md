> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/delegate](https://developer.apple.com/documentation/appkit/nsfontmanager/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The font manager’s delegate.

> There is no font manager delegate; don’t use this property.

## Declaration

```swift
unowned(unsafe) var delegate: AnyObject? { get set }
```

## See Also

### Properties

- [applicationOnlyMask](../nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.
- [collectionNames](collectionnames.md): Deprecated. The names of the currently loaded font collections.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The font manager’s delegate.

> There is no font manager delegate; don’t use this property.

## Declaration

```objectivec
@property (assign, nullable) id delegate;
```

## See Also

### Properties

- [NSFontCollectionApplicationOnlyMask](../nsfontcollectionoptions/applicationonlymask.md): Makes the collection available only to the application.
- [collectionNames](collectionnames.md): Deprecated. The names of the currently loaded font collections.
