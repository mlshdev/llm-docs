> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/name](https://developer.apple.com/documentation/webkit/wkcontentworld/name)

# name (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The name of a custom content world.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a valid string only for content worlds you retrieve using the [world(name:)](world%28name_%29.md) function. The value of this property is `nil` for the content worlds in the [defaultClient](defaultclient.md) and [page](page.md) properties.

## See Also

### Retrieving a Custom Content World

- [world(name:)](world%28name_%29.md): Returns the custom content world with the specified name.

# name (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The name of a custom content world.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This property contains a valid string only for content worlds you retrieve using the [worldWithName:](world%28name_%29.md) function. The value of this property is `nil` for the content worlds in the [defaultClientWorld](defaultclient.md) and [pageWorld](page.md) properties.

## See Also

### Retrieving a Custom Content World

- [worldWithName:](world%28name_%29.md): Returns the custom content world with the specified name.
