> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/webkitanimationevent/1634262-animationname](https://developer.apple.com/documentation/webkitjs/webkitanimationevent/1634262-animationname)

# animationName

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The name of the animation. The value of the CSS -webkit-animation-name property of the animation that caused the event.

## Declaration

```
readonly attribute DOMString animationName;
```

## See Also

### Accessing Properties

- [elapsedTime](1633014-elapsedtime.md): The duration of the animation, in seconds, since this event was sent, excluding any time the animation is paused. This value is not affected by the value of the CSS -webkit-animation-delay property. If the type of the event is `webkitAnimationStart`, `elapsedTime` is `0`.

### Related Documentation

- [Safari CSS Visual Effects Guide](https://developer.apple.com/library/archive/documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Introduction.html#//apple_ref/doc/uid/TP40008032)
