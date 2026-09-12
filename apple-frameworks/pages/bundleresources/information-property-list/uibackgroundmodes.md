> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uibackgroundmodes](https://developer.apple.com/documentation/bundleresources/information-property-list/uibackgroundmodes)

# UIBackgroundModes

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · visionOS 1.0+ · watchOS 4.0+

Services provided by an app that require it to run in the background.

## Details

`UIBackgroundModes`

## Possible Values

- `audio`:
- `bluetooth-central`:
- `bluetooth-peripheral`:
- `external-accessory`:
- `fetch`:
- `location`:
- `nearby-interaction`:
- `network-authentication`:
- `newsstand-content`:
- `processing`:
- `push-to-talk`:
- `remote-notification`:
- `screen-capture`:
- `voip`:

<a id="Discussion"></a>

## Discussion

To add this key to your Information Property List, enable the Background Modes capability in Xcode. For information on configuring background execution modes and the platforms that support them, see [Configuring background execution modes](https://developer.apple.com/documentation/xcode/configuring-background-execution-modes).

## See Also

### Background execution

- [WKBackgroundModes](wkbackgroundmodes.md): The services a watchOS app provides that require it to continue running in the background.
- [BGTaskSchedulerPermittedIdentifiers](bgtaskschedulerpermittedidentifiers.md): An array of strings containing developer-specified task identifiers in reverse URL notation.
- [LSBackgroundOnly](lsbackgroundonly.md): A Boolean value indicating whether the app runs only in the background.
