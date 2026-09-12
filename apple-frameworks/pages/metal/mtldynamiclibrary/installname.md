> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldynamiclibrary/installname](https://developer.apple.com/documentation/metal/mtldynamiclibrary/installname)

# installName (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A file path for this dynamic library.

## Declaration

```swift
var installName: String { get }
```

## See Also

### Identifying the library

- [device](device.md): The Metal device object that created the dynamic library.
- [label](label.md): A string that identifies the library.

# installName (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A file path for this dynamic library.

## Declaration

```objectivec
@property (readonly) NSString * installName;
```

## See Also

### Identifying the library

- [device](device.md): The Metal device object that created the dynamic library.
- [label](label.md): A string that identifies the library.
