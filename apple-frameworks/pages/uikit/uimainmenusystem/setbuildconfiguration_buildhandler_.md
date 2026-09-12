> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimainmenusystem/setbuildconfiguration:buildhandler:](https://developer.apple.com/documentation/uikit/uimainmenusystem/setbuildconfiguration:buildhandler:)

# setBuildConfiguration:buildHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies that the main menu system should be built using the specified configuration. A build handler can be optionally provided, which the main menu system will use instead of calling `-buildMenuWithBuilder:`. Setting this will invalidate and rebuild the main menu system. Ideally it should be set once, and as early as possible, preferably in `-application:didFinishLaunchingWithOptions:`. Subsequent rebuilds of the main menu system will continue to use this `configuration` and `buildHandler`. It is a developer error to set the `configuration` while the main menu system is building. Doing so will assert.

## Declaration

```objectivec
- (void) setBuildConfiguration:(UIMainMenuSystemConfiguration *) configuration buildHandler:(void (^)(id<UIMenuBuilder>builder)) buildHandler;
```

## See Also

### Configuring a main menu system

- [UIMainMenuSystemConfiguration](configuration.md): A configuration for the main menu system. You can specify whether or not certain elements are present in the initial main menu, as well as a block to build the menu using a UIMenuBuilder.
