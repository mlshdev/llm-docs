> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/init(localizedname:)](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/init(localizedname:))

# init(localizedName:) (Swift)

**Framework:** CallKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a configuration with the specified localized name.

## Declaration

```swift
convenience init(localizedName: String)
```

## Parameters

- `localizedName`: A localized name for the provider.

<a id="return-value"></a>

## Return Value

A new configuration object initialized with the specified localized name.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating New Configurations

- [init()](init%28%29.md): Creates the configuration of a provider object.

# initWithLocalizedName: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a configuration with the specified localized name.

## Declaration

```objectivec
- (instancetype) initWithLocalizedName:(NSString *) localizedName;
```

## Parameters

- `localizedName`: A localized name for the provider.

<a id="return-value"></a>

## Return Value

A new configuration object initialized with the specified localized name.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

## See Also

### Creating New Configurations

- [init](init%28%29.md): Creates the configuration of a provider object.
