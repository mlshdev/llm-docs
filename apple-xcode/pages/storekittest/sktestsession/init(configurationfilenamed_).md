> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/init(configurationfilenamed:)](https://developer.apple.com/documentation/storekittest/sktestsession/init(configurationfilenamed:))

# init(configurationFileNamed:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes the test session with the provided configuration file that you include in your application’s bundle.

## Declaration

```swift
convenience init(configurationFileNamed filename: String) throws
```

## Parameters

- `filename`: A StoreKit configuration file that you include in your application’s bundle.

<a id="discussion"></a>

## Discussion

Create a configuration file in Xcode by selecting File \> New \> File and choosing StoreKit Configuration File. By default, the filename is `Configuration.storekit`. You can include multiple configuration files in your project, but only one can be active at a time. StoreKit configuration files always have a .`storekit` file extension.

To return all settings in the test session to the states defined in this configuration file, call [resetToDefaultState()](resettodefaultstate%28%29.md).

## See Also

### Initializing test sessions

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.
- [resetToDefaultState()](resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.

# initWithConfigurationFileNamed:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes the test session with the provided configuration file that you include in your application’s bundle.

## Declaration

```objectivec
- (instancetype) initWithConfigurationFileNamed:(NSString *) filename error:(NSError **) error;
```

## Parameters

- `filename`: A StoreKit configuration file that you include in your application’s bundle.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

Create a configuration file in Xcode by selecting File \> New \> File and choosing StoreKit Configuration File. By default, the filename is `Configuration.storekit`. You can include multiple configuration files in your project, but only one can be active at a time. StoreKit configuration files always have a .`storekit` file extension.

To return all settings in the test session to the states defined in this configuration file, call [resetToDefaultState](resettodefaultstate%28%29.md).

## See Also

### Initializing test sessions

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Initializes the test session with a configuration file you provide through a URL.
- [resetToDefaultState](resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.
