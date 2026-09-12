> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/init(contentsof:)](https://developer.apple.com/documentation/storekittest/sktestsession/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes the test session with a configuration file you provide through a URL.

## Declaration

```swift
init(contentsOf fileURL: URL) throws
```

## Parameters

- `fileURL`: A file URL for a configuration file with a .`storekit` extension.

<a id="discussion"></a>

## Discussion

The file must have a `.storekit` extension. Create a configuration file in Xcode by selecting File \> New \> File and choosing StoreKit Configuration File.

To return all settings in the test session to the states defined in this StoreKit configuration file, call [resetToDefaultState()](resettodefaultstate%28%29.md).

## See Also

### Initializing test sessions

- [init(configurationFileNamed:)](init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [resetToDefaultState()](resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes the test session with a configuration file you provide through a URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) fileURL error:(NSError **) error;
```

## Parameters

- `fileURL`: A file URL for a configuration file with a .`storekit` extension.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

The file must have a `.storekit` extension. Create a configuration file in Xcode by selecting File \> New \> File and choosing StoreKit Configuration File.

To return all settings in the test session to the states defined in this StoreKit configuration file, call [resetToDefaultState](resettodefaultstate%28%29.md).

## See Also

### Initializing test sessions

- [initWithConfigurationFileNamed:error:](init%28configurationfilenamed_%29.md): Initializes the test session with the provided configuration file that you include in your application’s bundle.
- [resetToDefaultState](resettodefaultstate%28%29.md): Removes all property overrides and resets all test session settings to their default state.
