> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsenumerationoptions/reverse](https://developer.apple.com/documentation/foundation/nsenumerationoptions/reverse)

# reverse (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the enumeration should be performed in reverse.

## Declaration

```swift
static var reverse: NSEnumerationOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option is available for `NSArray` and `NSIndexSet` classes; its behavior is undefined for `NSDictionary` and `NSSet` classes, or when combined with the `NSEnumerationConcurrent` flag.

## See Also

### Constants

- [concurrent](concurrent.md): Specifies that the Block enumeration should be concurrent.

# NSEnumerationReverse (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the enumeration should be performed in reverse.

## Declaration

```objectivec
NSEnumerationReverse
```

<a id="Discussion"></a>

## Discussion

This option is available for `NSArray` and `NSIndexSet` classes; its behavior is undefined for `NSDictionary` and `NSSet` classes, or when combined with the `NSEnumerationConcurrent` flag.

## See Also

### Constants

- [NSEnumerationConcurrent](concurrent.md): Specifies that the Block enumeration should be concurrent.
