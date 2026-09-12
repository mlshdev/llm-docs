> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwconfiguration/configurationwithconfiguration:](https://developer.apple.com/documentation/corewlan/cwconfiguration/configurationwithconfiguration:)

# configurationWithConfiguration:

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Convenience method for getting a CWConfiguration object initialized with the given CWConfiguration object.

## Declaration

```objectivec
+ (instancetype) configurationWithConfiguration:(CWConfiguration *) configuration;
```

## Parameters

- `configuration`: The CWConfiguration object to use to initialize a new CWConfiguration object.

<a id="return-value"></a>

## Return Value

A CWConfiguration object.

## See Also

### Creating a configuration

- [init](init%28%29.md): Creates an empty CWConfiguration object.
- [initWithConfiguration:](init%28configuration_%29.md): Creates and returns a CWConfiguration object initialized with the given CWConfiguration object.
- [configuration](configuration.md): Convenience method for getting an empty CWConfiguration object.
