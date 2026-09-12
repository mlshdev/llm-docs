> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amapplescriptaction/script](https://developer.apple.com/documentation/automator/amapplescriptaction/script)

# script (Swift)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An `OSAScript` object representing the receiver’s script containing the `on run` command handler.

## Declaration

```swift
@NSCopying var script: OSAScript? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, `script` is `main.applescript`, which is stored in the action bundle. You can use `setScript:` to set the receiver’s script to `newScript`, where `newScript` must be an `OSAScript` object that could be instantiated from a script in the action bundle. `script` must contain the `on run` command handler.

# script (Objective-C)

**Framework:** Automator  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

An `OSAScript` object representing the receiver’s script containing the `on run` command handler.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) OSAScript * script;
```

<a id="Discussion"></a>

## Discussion

By default, `script` is `main.applescript`, which is stored in the action bundle. You can use `setScript:` to set the receiver’s script to `newScript`, where `newScript` must be an `OSAScript` object that could be instantiated from a script in the action bundle. `script` must contain the `on run` command handler.
