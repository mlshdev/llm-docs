> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountframes](https://developer.apple.com/documentation/foundation/nscountframes)

# NSCountFrames

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the number of call frames on the stack.

## Declaration

```objectivec
extern NSUInteger NSCountFrames();
```

## See Also

### Debugging

- [NSFrameAddress](nsframeaddress.md): Returns the value of the frame pointer of the specified frame.
- [NSIsFreedObject](nsisfreedobject.md): Returns a Boolean indicating whether the specified object has been freed.
- [NSRecordAllocationEvent](nsrecordallocationevent.md): Notes an object or zone allocation event and various other statistics, such as the time and current thread.
- [NSReturnAddress](nsreturnaddress.md): Returns the value of the return address of the specified frame.
