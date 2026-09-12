> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/displaysyncenabled](https://developer.apple.com/documentation/quartzcore/cametallayer/displaysyncenabled)

# displaySyncEnabled (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

A Boolean value that determines whether the layer synchronizes its updates to the display’s refresh rate.

## Declaration

```swift
var displaySyncEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to synchronize the presentation of the layer’s contents with the display’s refresh, also known as *vsync* or *vertical sync*. If [false](https://developer.apple.com/documentation/swift/false), the layer presents new content more quickly, but possibly with brief visual artifacts (*screen tearing*).

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Presentation Behavior

- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the layer presents its content using a Core Animation transaction.

# displaySyncEnabled (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.13+

A Boolean value that determines whether the layer synchronizes its updates to the display’s refresh rate.

## Declaration

```objectivec
@property BOOL displaySyncEnabled;
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to synchronize the presentation of the layer’s contents with the display’s refresh, also known as *vsync* or *vertical sync*. If [false](https://developer.apple.com/documentation/swift/false), the layer presents new content more quickly, but possibly with brief visual artifacts (*screen tearing*).

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Presentation Behavior

- [presentsWithTransaction](presentswithtransaction.md): A Boolean value that determines whether the layer presents its content using a Core Animation transaction.
