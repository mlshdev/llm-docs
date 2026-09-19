> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/auaudiounit/providesuserinterface

# providesUserInterface (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.

## Declaration

```swift
var providesUserInterface: Bool { get }
```

## See Also

### Configuring the User Interface

- [supportedViewConfigurations(\_:)](supportedviewconfigurations%28__%29.md)
- [select(\_:)](select%28__%29.md)

# providesUserInterface (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL providesUserInterface;
```

```objectivec
@property (atomic, readonly) BOOL providesUserInterface;
```

## See Also

### Configuring the User Interface

- [supportedViewConfigurations:](supportedviewconfigurations%28__%29.md)
- [selectViewConfiguration:](select%28__%29.md)
