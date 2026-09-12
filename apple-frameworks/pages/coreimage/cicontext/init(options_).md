> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(options:)](https://developer.apple.com/documentation/coreimage/cicontext/init(options:))

# init(options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initializes a context without a specific rendering destination, using the specified options.

## Declaration

```swift
init(options: [CIContextOption : Any]? = nil)
```

## Parameters

- `options`: A dictionary containing options for the context. For applicable keys and values, see [CIContextOption](../cicontextoption.md).

<a id="return-value"></a>

## Return Value

An initialized Core Image context.

<a id="Discussion"></a>

## Discussion

If you create a context without specifying a rendering destination, Core Image automatically chooses and internally manages a rendering destination based on the current device’s capabilities and your settings in the `options` dictionary. You cannot use a context without an explicit destination for the methods listed in Drawing Images. Instead, use the methods listed in Rendering Images.

The `options` dictionary defines behaviors for the context, such as color space and rendering quality. For example, to create a CPU-based context, use the  [useSoftwareRenderer](../cicontextoption/usesoftwarerenderer.md) key.

# initWithOptions: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Initializes a context without a specific rendering destination, using the specified options.

## Declaration

```objectivec
- (instancetype) initWithOptions:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `options`: A dictionary containing options for the context. For applicable keys and values, see [CIContextOption](../cicontextoption.md).

<a id="return-value"></a>

## Return Value

An initialized Core Image context.

<a id="Discussion"></a>

## Discussion

If you create a context without specifying a rendering destination, Core Image automatically chooses and internally manages a rendering destination based on the current device’s capabilities and your settings in the `options` dictionary. You cannot use a context without an explicit destination for the methods listed in Drawing Images. Instead, use the methods listed in Rendering Images.

The `options` dictionary defines behaviors for the context, such as color space and rendering quality. For example, to create a CPU-based context, use the  [kCIContextUseSoftwareRenderer](../cicontextoption/usesoftwarerenderer.md) key.
