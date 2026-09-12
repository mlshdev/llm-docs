> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/app/1627415-onresume](https://developer.apple.com/documentation/tvmljs/app/1627415-onresume)

# onResume

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A callback function that is automatically called when the app moves to the foreground.

## Declaration

```
attribute function onResume;
```

<a id="discussion"></a>

## Discussion

Use the `onResume` attribute to start any required actions when the app moves from the background to the foreground. This attribute must be set to a function that accepts an `options` argument; for example `App.onResume = function (options) {}`. The `options` argument is always set to `null`.

## See Also

### Responding to App Life Cycle Events

- [onError](1627353-onerror.md): A callback function that is automatically called when an error is sent from the Apple TV.
- [onExit](1627419-onexit.md): A callback function that is automatically called when the app has been exited.
- [onLaunch](1627407-onlaunch.md): A callback function that is automatically called when the app has been launched.
- [onSuspend](1627431-onsuspend.md): A callback function that is automatically called when the app is sent to the background.
