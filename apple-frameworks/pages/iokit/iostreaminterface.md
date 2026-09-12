> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreaminterface](https://developer.apple.com/documentation/iokit/iostreaminterface)

# IOStreamInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
typedef struct IOStreamInterface_v1_t {
    ...
} IOStreamInterface;
```

## Topics

### Instance Properties

- [AddRef](iostreaminterface/1579731-addref.md)
- [AddToRunLoop](iostreaminterface/1579739-addtorunloop.md)
- [Close](iostreaminterface/1579751-close.md)
- [DequeueOutputEntry](iostreaminterface/1579732-dequeueoutputentry.md)
- [EnqueueInputBuffer](iostreaminterface/1579745-enqueueinputbuffer.md)
- [EnqueueInputEntry](iostreaminterface/1579752-enqueueinputentry.md)
- [GetBufferCount](iostreaminterface/1579734-getbuffercount.md)
- [GetBufferInfo](iostreaminterface/1579738-getbufferinfo.md)
- [GetControlBuffer](iostreaminterface/1579750-getcontrolbuffer.md)
- [GetControlBufferLength](iostreaminterface/1579726-getcontrolbufferlength.md)
- [GetDataBuffer](iostreaminterface/1579730-getdatabuffer.md)
- [GetDataBufferLength](iostreaminterface/1579737-getdatabufferlength.md)
- [GetInputPort](iostreaminterface/1579742-getinputport.md)
- [GetInputQueue](iostreaminterface/1579721-getinputqueue.md)
- [GetMode](iostreaminterface/1579755-getmode.md)
- [GetOutputPort](iostreaminterface/1579736-getoutputport.md)
- [GetOutputQueue](iostreaminterface/1579741-getoutputqueue.md)
- [GetRunLoopSource](iostreaminterface/1579753-getrunloopsource.md)
- [Open](iostreaminterface/1579740-open.md)
- [QueryInterface](iostreaminterface/1579749-queryinterface.md)
- [Release](iostreaminterface/1579747-release.md)
- [RemoveFromRunLoop](iostreaminterface/1579754-removefromrunloop.md)
- [Revision](iostreaminterface/1579723-revision.md)
- [SendInputNotification](iostreaminterface/1579746-sendinputnotification.md)
- [SendInputSyncNotification](iostreaminterface/1579728-sendinputsyncnotification.md)
- [SetMode](iostreaminterface/1579725-setmode.md)
- [SetOutputCallback](iostreaminterface/1579748-setoutputcallback.md)
- [StartStream](iostreaminterface/1579727-startstream.md)
- [StopStream](iostreaminterface/1579743-stopstream.md)
- [SuspendStream](iostreaminterface/1579720-suspendstream.md)
- [Version](iostreaminterface/1579724-version.md)
