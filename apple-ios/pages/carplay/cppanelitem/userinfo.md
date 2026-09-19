> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelitem/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Custom information you want to store with the item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="discussion"></a>

## Discussion

Store any app-specific data for the item in this property. For example, you might store a dictionary of keys and values. The item maintains a strong reference to the object you specify.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Custom information you want to store with the item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="discussion"></a>

## Discussion

Store any app-specific data for the item in this property. For example, you might store a dictionary of keys and values. The item maintains a strong reference to the object you specify.
