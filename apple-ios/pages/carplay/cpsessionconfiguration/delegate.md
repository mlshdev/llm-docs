> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration/delegate

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The custom object you use to handle changes to environment values.

## Declaration

```swift
weak var delegate: (any CPSessionConfigurationDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

This property stores the object you provide at initialization time, but you can change it later if needed. When environment values change, the [CPSessionConfiguration](../cpsessionconfiguration.md) object responds by calling the methods of the object in this property.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The custom object you use to handle changes to environment values.

## Declaration

```objectivec
@property (nonatomic, weak) id<CPSessionConfigurationDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

This property stores the object you provide at initialization time, but you can change it later if needed. When environment values change, the [CPSessionConfiguration](../cpsessionconfiguration.md) object responds by calling the methods of the object in this property.
