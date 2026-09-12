> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdataseriesdescriptor/attributedname](https://developer.apple.com/documentation/accessibility/axdataseriesdescriptor/attributedname)

# attributedName (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the data series name.

## Declaration

```swift
@NSCopying var attributedName: NSAttributedString { get set }
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [name](name.md).

## See Also

### Naming the series

- [name](name.md): The name of the data series.

# attributedName (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attributed version of the data series name.

## Declaration

```objectivec
@property (nonatomic, copy) NSAttributedString * attributedName;
```

<a id="discussion"></a>

## Discussion

If you set the value of this property, the system uses this value instead of [name](name.md).

## See Also

### Naming the series

- [name](name.md): The name of the data series.
