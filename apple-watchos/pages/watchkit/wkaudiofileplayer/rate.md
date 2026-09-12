> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/rate](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/rate)

# rate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The current rate of playback.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The playback rate refers to the playback speed. A value of `0.0` indicates that playback is paused while a value of `1.0` indicates playback is proceeding at the natural rate of the item. Rates other than `0.0` and `1.0` let you play the audio faster or slower than the natural rate of the item. Negative values let you play the audio in reverse.

## See Also

### Configuring and Controlling Playback

- [play()](play%28%29.md): Deprecated. Begins playback of the current item.
- [pause()](pause%28%29.md): Deprecated. Pauses playback of the associated item.

# rate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The current rate of playback.

## Declaration

```objectivec
@property (nonatomic) float rate;
```

<a id="Discussion"></a>

## Discussion

The playback rate refers to the playback speed. A value of `0.0` indicates that playback is paused while a value of `1.0` indicates playback is proceeding at the natural rate of the item. Rates other than `0.0` and `1.0` let you play the audio faster or slower than the natural rate of the item. Negative values let you play the audio in reverse.

## See Also

### Configuring and Controlling Playback

- [play](play%28%29.md): Deprecated. Begins playback of the current item.
- [pause](pause%28%29.md): Deprecated. Pauses playback of the associated item.
