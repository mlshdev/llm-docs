> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarchitecture/name](https://developer.apple.com/documentation/metal/mtlarchitecture/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The name of a GPU device’s architecture.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

The property’s value is equivalent to the output from the `metal-arch` command line tool on the same system.

```shell
% xcrun metal-arch
applegpu_g13s
```

Apps can use this property’s value to make decisions at runtime. For example, an app could retrieve a GPU-specific file from its developer’s content delivery network (CDN), such as a shader library or binary archive. See [Shader libraries](../shader-libraries.md) and [Shader library and archive creation](../shader-library-and-archive-creation.md) for more information.

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The name of a GPU device’s architecture.

## Declaration

```objectivec
@property (readonly, nonnull) NSString * name;
```

<a id="discussion"></a>

## Discussion

The property’s value is equivalent to the output from the `metal-arch` command line tool on the same system.

```shell
% xcrun metal-arch
applegpu_g13s
```

Apps can use this property’s value to make decisions at runtime. For example, an app could retrieve a GPU-specific file from its developer’s content delivery network (CDN), such as a shader library or binary archive. See [Shader libraries](../shader-libraries.md) and [Shader library and archive creation](../shader-library-and-archive-creation.md) for more information.
