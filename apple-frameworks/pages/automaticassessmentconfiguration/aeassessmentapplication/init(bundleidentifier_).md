> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication/init(bundleidentifier:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication/init(bundleidentifier:))

# init(bundleIdentifier:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a representation of an app using its bundle identifier.

## Declaration

```swift
init(bundleIdentifier: String)
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app.

<a id="Discussion"></a>

## Discussion

You can get the bundle identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

However, it’s typically more secure to specify both the bundle and team identifiers when creating an app representation using [init(bundleIdentifier:teamIdentifier:)](init%28bundleidentifier_teamidentifier_%29.md).

## See Also

### Creating an assessment application

- [init(bundleIdentifier:teamIdentifier:)](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.

# initWithBundleIdentifier: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a representation of an app using its bundle identifier.

## Declaration

```objectivec
- (instancetype) initWithBundleIdentifier:(NSString *) bundleIdentifier;
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app.

<a id="Discussion"></a>

## Discussion

You can get the bundle identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

However, it’s typically more secure to specify both the bundle and team identifiers when creating an app representation using [initWithBundleIdentifier:teamIdentifier:](init%28bundleidentifier_teamidentifier_%29.md).

## See Also

### Creating an assessment application

- [initWithBundleIdentifier:teamIdentifier:](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.
