> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/tecconvertercontextrec](https://developer.apple.com/documentation/coreservices/tecconvertercontextrec)

# TECConverterContextRec

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains converter information used by a Text Encoding Converter plug-in.

## Declaration

```objectivec
typedef struct TECConverterContextRec {
    ...
} TECConverterContextRec;
```

## Topics

### Instance Properties

- [bufferContext](tecconvertercontextrec/1498350-buffercontext.md)
- [clearContextInfoProc](tecconvertercontextrec/1498585-clearcontextinfoproc.md): A pointer to a callback for our clear procedure.
- [contextRefCon](tecconvertercontextrec/1498533-contextrefcon.md): A 32-bit value containing or referring to plug-in-specific data.
- [conversionProc](tecconvertercontextrec/1498409-conversionproc.md): A pointer to a callback for your conversion procedure.
- [destEncoding](tecconvertercontextrec/1498400-destencoding.md): The text encoding specification for the destination text.
- [flushProc](tecconvertercontextrec/1498586-flushproc.md): A pointer to a callback for your reset procedure.
- [options1](tecconvertercontextrec/1498561-options1.md): A 32-bit value that specfies options needed by your plug-in.
- [options2](tecconvertercontextrec/1498421-options2.md): A 32-bit value that specfies options needed by your plug-in.
- [pluginRec](tecconvertercontextrec/1498573-pluginrec.md)
- [pluginState](tecconvertercontextrec/1498418-pluginstate.md)
- [reserved1](tecconvertercontextrec/1498424-reserved1.md): Reserved.
- [reserved2](tecconvertercontextrec/1498448-reserved2.md): Reserved.
- [sourceEncoding](tecconvertercontextrec/1498368-sourceencoding.md): The text encoding specification for the source text.
