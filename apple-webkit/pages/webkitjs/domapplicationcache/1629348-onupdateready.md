> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domapplicationcache/1629348-onupdateready](https://developer.apple.com/documentation/webkitjs/domapplicationcache/1629348-onupdateready)

# onupdateready

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Property  
**Availability:** Safari Desktop 4.0+ · Safari Mobile 2.1+

Sent when there is an existing application cache, the update process finishes, and there is a new application cache ready for use.

## Declaration

```
attribute EventHandler onupdateready;
```

## See Also

### Handling Events

- [onchecking](1634093-onchecking.md): Sent when the cache update process begins.
- [onerror](1629048-onerror.md): Sent when an error occurs.
- [onnoupdate](1631877-onnoupdate.md): Sent when the update process finishes but the manifest file does not change.
- [ondownloading](1632146-ondownloading.md): Sent when the update process begins downloading resources in the manifest file.
- [onprogress](1631599-onprogress.md): Sent when each resource in the manifest file begins to download.
- [oncached](1632145-oncached.md): Sent when the update process finishes for the first time—that is, the first time an application cache is saved.
