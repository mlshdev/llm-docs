> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication/init(bundleidentifier:teamidentifier:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication/init(bundleidentifier:teamidentifier:))

# init(bundleIdentifier:teamIdentifier:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a representation of an app using its bundle and team identifiers.

## Declaration

```swift
init(bundleIdentifier: String, teamIdentifier: String?)
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app.
- `teamIdentifier`: The team identifier of the team that distributes the app.

<a id="Discussion"></a>

## Discussion

You can get the bundle and team identifiers for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.

# initWithBundleIdentifier:teamIdentifier: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a representation of an app using its bundle and team identifiers.

## Declaration

```objectivec
- (instancetype) initWithBundleIdentifier:(NSString *) bundleIdentifier teamIdentifier:(NSString *) teamIdentifier;
```

## Parameters

- `bundleIdentifier`: The bundle identifier of the app.
- `teamIdentifier`: The team identifier of the team that distributes the app.

<a id="Discussion"></a>

## Discussion

You can get the bundle and team identifiers for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.
