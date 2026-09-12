> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilterconstructor/filter(withname:)](https://developer.apple.com/documentation/coreimage/cifilterconstructor/filter(withname:))

# filter(withName:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a filter object specified by name.

## Declaration

```swift
func filter(withName name: String) -> CIFilter?
```

## Parameters

- `name`: The name of the requested custom filter.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object implementing the custom filter.

<a id="Discussion"></a>

## Discussion

Core Image calls this method when a filter is requested by name using the [CIFilter](../cifilter-swift.class.md) class method [init(name:)](../cifilter-swift.class/init%28name_%29.md) method (or related methods). Your implementation of this method should provide a new instance of the [CIFilter](../cifilter-swift.class.md) subclass for your custom filter.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

# filterWithName: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a filter object specified by name.

## Declaration

```objectivec
- (CIFilter *) filterWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the requested custom filter.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object implementing the custom filter.

<a id="Discussion"></a>

## Discussion

Core Image calls this method when a filter is requested by name using the [CIFilter](../cifilter-swift.class.md) class method [filterWithName:](../cifilter-swift.class/init%28name_%29.md) method (or related methods). Your implementation of this method should provide a new instance of the [CIFilter](../cifilter-swift.class.md) subclass for your custom filter.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
