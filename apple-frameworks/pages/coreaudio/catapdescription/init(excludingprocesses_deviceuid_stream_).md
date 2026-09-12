> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/init(excludingprocesses:deviceuid:stream:)](https://developer.apple.com/documentation/coreaudio/catapdescription/init(excludingprocesses:deviceuid:stream:))

# init(excludingProcesses:deviceUID:stream:)

**Framework:** Core Audio  
**Kind:** Initializer  
**Availability:** macOS 14.0+

## Declaration

```swift
convenience init(excludingProcesses processesIDsToExcludeFromTap: [AudioObjectID], deviceUID: String, stream: UInt)
```

## See Also

### Initializers

- [init()](init%28%29.md)
- [init(monoGlobalTapButExcludeProcesses:)](init%28monoglobaltapbutexcludeprocesses_%29.md)
- [init(monoMixdownOfProcesses:)](init%28monomixdownofprocesses_%29.md)
- [init(processes:deviceUID:stream:)](init%28processes_deviceuid_stream_%29.md)
- [init(stereoGlobalTapButExcludeProcesses:)](init%28stereoglobaltapbutexcludeprocesses_%29.md)
- [init(stereoMixdownOfProcesses:)](init%28stereomixdownofprocesses_%29.md)
