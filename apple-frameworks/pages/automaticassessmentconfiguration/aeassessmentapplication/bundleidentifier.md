> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication/bundleidentifier](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The bundle identifier of the app.

## Declaration

```swift
var bundleIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

You can get the bundle identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [init(bundleIdentifier:teamIdentifier:)](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.

# bundleIdentifier (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

The bundle identifier of the app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

You can get the bundle identifier for an app using the `codesign` command line utility:

```shell
% codesign -v -d /Applications/MyApp.app
```

## See Also

### Creating an assessment application

- [initWithBundleIdentifier:teamIdentifier:](init%28bundleidentifier_teamidentifier_%29.md): Creates a representation of an app using its bundle and team identifiers.
- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Creates a representation of an app using its bundle identifier.
- [teamIdentifier](teamidentifier.md): The team identifier of the app.
