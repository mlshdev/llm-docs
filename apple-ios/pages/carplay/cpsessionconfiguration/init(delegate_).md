> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpsessionconfiguration/init(delegate:)

# init(delegate:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Configures a session configuration with the custom delegate object you provide.

## Declaration

```swift
init(delegate: any CPSessionConfigurationDelegate)
```

## Parameters

- `delegate`: A custom type you use to handle subsequent changes to environment values.

<a id="return-value"></a>

## Return Value

A new session configuration object with the specified delegate.

## See Also

### Creating a session configuration

- [CPSessionConfigurationDelegate](../cpsessionconfigurationdelegate.md): Methods you use to respond to changes in the CarPlay environment.

# initWithDelegate: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Configures a session configuration with the custom delegate object you provide.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<CPSessionConfigurationDelegate>) delegate;
```

## Parameters

- `delegate`: A custom type you use to handle subsequent changes to environment values.

<a id="return-value"></a>

## Return Value

A new session configuration object with the specified delegate.

## See Also

### Creating a session configuration

- [CPSessionConfigurationDelegate](../cpsessionconfigurationdelegate.md): Methods you use to respond to changes in the CarPlay environment.
