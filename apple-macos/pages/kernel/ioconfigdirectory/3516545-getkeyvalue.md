> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioconfigdirectory/3516545-getkeyvalue

# getKeyValue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn getKeyValue(int key, IOConfigDirectory *& value, OSString **text);
```
