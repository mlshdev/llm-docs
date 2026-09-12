> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1400687-exportobjecttoclient](https://developer.apple.com/documentation/kernel/iouserclient/1400687-exportobjecttoclient)

# exportObjectToClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn exportObjectToClient(task_t task, OSObject *obj, io_object_t *clientObj);
```
