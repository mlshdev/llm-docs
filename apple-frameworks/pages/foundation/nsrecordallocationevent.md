> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrecordallocationevent](https://developer.apple.com/documentation/foundation/nsrecordallocationevent)

# NSRecordAllocationEvent

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Notes an object or zone allocation event and various other statistics, such as the time and current thread.

## Declaration

```objectivec
extern void NSRecordAllocationEvent(int eventType, id object);
```

## See Also

### Debugging

- [NSCountFrames](nscountframes.md): Returns the number of call frames on the stack.
- [NSFrameAddress](nsframeaddress.md): Returns the value of the frame pointer of the specified frame.
- [NSIsFreedObject](nsisfreedobject.md): Returns a Boolean indicating whether the specified object has been freed.
- [NSReturnAddress](nsreturnaddress.md): Returns the value of the return address of the specified frame.
