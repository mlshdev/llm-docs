> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caconstraintlayoutmanager/layoutmanager](https://developer.apple.com/documentation/quartzcore/caconstraintlayoutmanager/layoutmanager)

# layoutManager

**Interface language:** Objective-C

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Returns the shared layout manager object.

## Declaration

```objectivec
+ (instancetype) layoutManager;
```

<a id="return-value"></a>

## Return Value

The shared layout manager object.

<a id="Discussion"></a>

## Discussion

You can assign the returned object to any layers that manage layout using constraints.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)
