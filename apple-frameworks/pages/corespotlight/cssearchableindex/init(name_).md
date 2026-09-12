> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/init(name:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/init(name:))

# init(name:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns an on-device index with the specified name.

## Declaration

```swift
init(name: String)
```

## Parameters

- `name`: A name that pertains to your custom organization.

<a id="return-value"></a>

## Return Value

An on-device index.

<a id="Discussion"></a>

## Discussion

If you want to use batching or you want to index items in a specific protection class, you need to use your own index (you can’t perform batch updates on the default index).

## See Also

### Creating an index

- [default()](default%28%29.md): Returns the default on-device index.
- [init(name:protectionClass:)](init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.

# initWithName: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns an on-device index with the specified name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: A name that pertains to your custom organization.

<a id="return-value"></a>

## Return Value

An on-device index.

<a id="Discussion"></a>

## Discussion

If you want to use batching or you want to index items in a specific protection class, you need to use your own index (you can’t perform batch updates on the default index).

## See Also

### Creating an index

- [defaultSearchableIndex](default%28%29.md): Returns the default on-device index.
- [initWithName:protectionClass:](init%28name_protectionclass_%29.md): Returns an on-device index with the specified name and data protection class.
