> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/init(urlassetinitializationoptions:)-rh4y](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/init(urlassetinitializationoptions:)-rh4y)

# init(urlAssetInitializationOptions:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable composition that uses the specified initialization options.

## Declaration

```swift
convenience init(urlAssetInitializationOptions URLAssetInitializationOptions: [String : Any]? = nil)
```

## Parameters

- `URLAssetInitializationOptions`: The initialization options to use to create the composition.

# compositionWithURLAssetInitializationOptions: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable composition that uses the specified initialization options.

## Declaration

```objectivec
+ (instancetype) compositionWithURLAssetInitializationOptions:(NSDictionary<NSString *,id> *) URLAssetInitializationOptions;
```

## Parameters

- `URLAssetInitializationOptions`: The initialization options to use to create the composition.

## See Also

### Creating a composition

- [composition](composition.md): Returns a new mutable composition.
