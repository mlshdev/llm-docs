> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565474-fsexchangeobjects](https://developer.apple.com/documentation/coreservices/1565474-fsexchangeobjects)

# FSExchangeObjects

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

> In macOS 10.8 and later, use [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](../foundation/filemanager/replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md) instead.

## Declaration

```objectivec
OSErr FSExchangeObjects(const FSRef *ref, const FSRef *destRef);
```

<a id="discussion"></a>

## Discussion

To determine whether [FSExchangeObjects](1565474-fsexchangeobjects.md) is supported in the current file system, call the [FSGetVolumeParms](1565147-fsgetvolumeparms.md) function and check whether the [bSupportsFSExchangeObjects](1565582-anonymous/bsupportsfsexchangeobjects.md) bit is set in the [vMAttrib](getvolparmsinfobuffer/1565870-vmattrib.md) field of the resulting [GetVolParmsInfoBuffer](getvolparmsinfobuffer.md) value.

> **Important**

> [FSExchangeObjects](1565474-fsexchangeobjects.md) is not supported in APFS.

## See Also

### Exchanging the Contents of Two Files

- [PBExchangeObjectsSync](1566627-pbexchangeobjectssync.md): Deprecated.
- [PBExchangeObjectsAsync](1566021-pbexchangeobjectsasync.md): Deprecated.
