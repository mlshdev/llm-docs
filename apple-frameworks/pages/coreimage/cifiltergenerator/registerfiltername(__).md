> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifiltergenerator/registerfiltername(_:)](https://developer.apple.com/documentation/coreimage/cifiltergenerator/registerfiltername(_:))

# registerFilterName(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Registers the name associated with a filter chain.

## Declaration

```swift
func registerFilterName(_ name: String)
```

## Parameters

- `name`: A unique name for the filter chain you want to register.

<a id="Discussion"></a>

## Discussion

This method allows you to register the filter chain as a named filter in the Core Image filter repository. You can then create a `CIFilter` object from it using the [init(name:)](../cifilter-swift.class/init%28name_%29.md) method of the [CIFilter](../cifilter-swift.class.md) class.

# registerFilterName: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Registers the name associated with a filter chain.

## Declaration

```objectivec
- (void) registerFilterName:(NSString *) name;
```

## Parameters

- `name`: A unique name for the filter chain you want to register.

<a id="Discussion"></a>

## Discussion

This method allows you to register the filter chain as a named filter in the Core Image filter repository. You can then create a `CIFilter` object from it using the [filterWithName:](../cifilter-swift.class/init%28name_%29.md) method of the [CIFilter](../cifilter-swift.class.md) class.
