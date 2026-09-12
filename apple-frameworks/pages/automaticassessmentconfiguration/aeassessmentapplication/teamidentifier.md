> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication/teamidentifier](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication/teamidentifier)

# teamIdentifier (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The team identifier of the app.

## Declaration

```swift
var teamIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

You can get the team identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [init(bundleIdentifier:teamIdentifier:)](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.

# teamIdentifier (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The team identifier of the app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * teamIdentifier;
```

<a id="Discussion"></a>

## Discussion

You can get the team identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [initWithBundleIdentifier:teamIdentifier:](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app.
