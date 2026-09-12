> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/supportedviewconfigurations(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/supportedviewconfigurations(_:))

# supportedViewConfigurations(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

## Declaration

```swift
func supportedViewConfigurations(_ availableViewConfigurations: [AUAudioUnitViewConfiguration]) -> IndexSet
```

## See Also

### Configuring the User Interface

- [providesUserInterface](providesuserinterface.md): A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.
- [select(\_:)](select%28__%29.md)

# supportedViewConfigurations: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

## Declaration

```objectivec
- (NSIndexSet *) supportedViewConfigurations:(NSArray<AUAudioUnitViewConfiguration *> *) availableViewConfigurations;
```

## See Also

### Configuring the User Interface

- [providesUserInterface](providesuserinterface.md): A Boolean that indicates whether the audio unit provides a user interface, normally in the form of a view controller.
- [selectViewConfiguration:](select%28__%29.md)
