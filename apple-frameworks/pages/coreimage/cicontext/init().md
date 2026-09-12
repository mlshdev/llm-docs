> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init()](https://developer.apple.com/documentation/coreimage/cicontext/init())

# init() (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initializes a context without a specific rendering destination, using default options.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An initialized Core Image context.

<a id="Discussion"></a>

## Discussion

If you create a context without specifying a rendering destination, Core Image automatically chooses and internally manages a rendering destination based on the current device’s capabilities. You cannot use a context without an explicit destination for the methods listed in Drawing Images. Instead, use the methods listed in Rendering Images.

To specify additional options for the context, use the [contextWithOptions:](contextwithoptions_.md) initializer instead.

# init (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initializes a context without a specific rendering destination, using default options.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An initialized Core Image context.

<a id="Discussion"></a>

## Discussion

If you create a context without specifying a rendering destination, Core Image automatically chooses and internally manages a rendering destination based on the current device’s capabilities. You cannot use a context without an explicit destination for the methods listed in Drawing Images. Instead, use the methods listed in Rendering Images.

To specify additional options for the context, use the [contextWithOptions:](contextwithoptions_.md) initializer instead.

## See Also

### Creating a Context Without Specifying a Destination

- [context](context.md): Creates a context without a specific rendering destination, using default options.
- [contextWithOptions:](contextwithoptions_.md): Initializes a context without a specific rendering destination, using the specified options.
