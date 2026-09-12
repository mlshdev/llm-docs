> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/app/1627407-onlaunch](https://developer.apple.com/documentation/tvmljs/app/1627407-onlaunch)

# onLaunch

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A callback function that is automatically called when the app has been launched.

## Declaration

```
attribute function onLaunch;
```

<a id="discussion"></a>

## Discussion

Use the `onLaunch` attribute to start any required actions (for example, loading the first TVML page) when the app launches. This attribute must be set to a function that accepts an `options` argument; for example `App.onLaunch = function (options) {}`. The options argument can contain the following keys:

- `launchContext`—Determines how the app is launched. Set to `background` to launch the app in the background.
- `location`—Contains the boot TVMLKit JS URL location.
- `reloadData`—The object passed in to `App.reload()` when the app is relaunched.
- User defined keys—Any custom keys that were passed to [launchOptions](../../tvmlkit/tvapplicationcontrollercontext/launchoptions.md).

## See Also

### Responding to App Life Cycle Events

- [onError](1627353-onerror.md): A callback function that is automatically called when an error is sent from the Apple TV.
- [onExit](1627419-onexit.md): A callback function that is automatically called when the app has been exited.
- [onResume](1627415-onresume.md): A callback function that is automatically called when the app moves to the foreground.
- [onSuspend](1627431-onsuspend.md): A callback function that is automatically called when the app is sent to the background.
