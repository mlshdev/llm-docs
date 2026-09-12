> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwconfiguration/init(configuration:)](https://developer.apple.com/documentation/corewlan/cwconfiguration/init(configuration:))

# init(configuration:) (Swift)

**Framework:** Core WLAN  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates and returns a CWConfiguration object initialized with the given CWConfiguration object.

## Declaration

```swift
init(configuration: CWConfiguration)
```

## Parameters

- `configuration`: The CWConfiguration object to use to initialize a new CWConfiguration object.

<a id="return-value"></a>

## Return Value

A CWConfiguration object.

## See Also

### Creating a configuration

- [init()](init%28%29.md): Creates an empty CWConfiguration object.

# initWithConfiguration: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates and returns a CWConfiguration object initialized with the given CWConfiguration object.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(CWConfiguration *) configuration;
```

## Parameters

- `configuration`: The CWConfiguration object to use to initialize a new CWConfiguration object.

<a id="return-value"></a>

## Return Value

A CWConfiguration object.

## See Also

### Creating a configuration

- [init](init%28%29.md): Creates an empty CWConfiguration object.
- [configuration](configuration.md): Convenience method for getting an empty CWConfiguration object.
- [configurationWithConfiguration:](configurationwithconfiguration_.md): Convenience method for getting a CWConfiguration object initialized with the given CWConfiguration object.
