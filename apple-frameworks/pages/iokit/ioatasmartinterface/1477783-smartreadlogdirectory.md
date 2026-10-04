> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioatasmartinterface/1477783-smartreadlogdirectory

# SMARTReadLogDirectory

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Reads the 512-byte log directory.

## Declaration

```objectivec
IOReturn (*SMARTReadLogDirectory)(void *interface, ATASMARTLogDirectory *logData);
```

<a id="discussion"></a>

## Discussion

The log directory is a directory of all possible SMART logs available from the drive.
