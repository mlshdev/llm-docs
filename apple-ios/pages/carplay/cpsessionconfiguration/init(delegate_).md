> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfiguration/init(delegate:)](https://developer.apple.com/documentation/carplay/cpsessionconfiguration/init(delegate:))

# init(delegate:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a session configuration with a delegate.

## Declaration

```swift
init(delegate: any CPSessionConfigurationDelegate)
```

## Parameters

- `delegate`: The delegate object.

<a id="return-value"></a>

## Return Value

A newly initialized session configuration.

## See Also

### Creating a Session Configuration

- [CPSessionConfigurationDelegate](../cpsessionconfigurationdelegate.md): A protocol for receiving notifications about changes to vehicle properties and configuration.

# initWithDelegate: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a session configuration with a delegate.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CPSessionConfigurationDelegate>) delegate;
```

## Parameters

- `delegate`: The delegate object.

<a id="return-value"></a>

## Return Value

A newly initialized session configuration.

## See Also

### Creating a Session Configuration

- [CPSessionConfigurationDelegate](../cpsessionconfigurationdelegate.md): A protocol for receiving notifications about changes to vehicle properties and configuration.
