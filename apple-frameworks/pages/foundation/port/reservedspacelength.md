> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/reservedspacelength](https://developer.apple.com/documentation/foundation/port/reservedspacelength)

# reservedSpaceLength (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes of space reserved by the receiver for sending data.

## Declaration

```swift
var reservedSpaceLength: Int { get }
```

<a id="Discussion"></a>

## Discussion

The number of bytes reserved by the receiver for sending data. The default length is `0`.

## See Also

### Setting information

- [send(before:components:from:reserved:)](send%28before_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [send(before:msgid:components:from:reserved:)](send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.

# reservedSpaceLength (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes of space reserved by the receiver for sending data.

## Declaration

```objectivec
@property (readonly) NSUInteger reservedSpaceLength;
```

<a id="Discussion"></a>

## Discussion

The number of bytes reserved by the receiver for sending data. The default length is `0`.

## See Also

### Setting information

- [sendBeforeDate:components:from:reserved:](send%28before_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [sendBeforeDate:msgid:components:from:reserved:](send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
