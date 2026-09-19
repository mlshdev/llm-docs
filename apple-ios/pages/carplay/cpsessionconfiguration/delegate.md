> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration/delegate

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that serves as the delegate to the session configuration.

## Declaration

```swift
weak var delegate: (any CPSessionConfigurationDelegate)? { get set }
```

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that serves as the delegate to the session configuration.

## Declaration

```objectivec
@property (nonatomic, weak) id<CPSessionConfigurationDelegate> delegate;
```
