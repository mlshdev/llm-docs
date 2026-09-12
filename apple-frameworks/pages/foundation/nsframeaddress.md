> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsframeaddress](https://developer.apple.com/documentation/foundation/nsframeaddress)

# NSFrameAddress

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of the frame pointer of the specified frame.

## Declaration

```objectivec
extern void *NSFrameAddress(NSUInteger frame);
```

## See Also

### Debugging

- [NSCountFrames](nscountframes.md): Returns the number of call frames on the stack.
- [NSIsFreedObject](nsisfreedobject.md): Returns a Boolean indicating whether the specified object has been freed.
- [NSRecordAllocationEvent](nsrecordallocationevent.md): Notes an object or zone allocation event and various other statistics, such as the time and current thread.
- [NSReturnAddress](nsreturnaddress.md): Returns the value of the return address of the specified frame.
