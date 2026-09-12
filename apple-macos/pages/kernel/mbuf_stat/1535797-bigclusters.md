> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/mbuf_stat/1535797-bigclusters](https://developer.apple.com/documentation/kernel/mbuf_stat/1535797-bigclusters)

# bigclusters

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Number of big clusters.

## Declaration

```objectivec
u_int32_t bigclusters;
```

## See Also

### Fields

- [mbufs](1535703-mbufs.md): Number of mbufs (free or otherwise).
- [clusters](1535704-clusters.md): Number of clusters (free or otherwise).
- [clfree](1535715-clfree.md): Number of free clusters.
- [drops](1535754-drops.md): Number of times allocation failed.
- [wait](1535798-wait.md): Number of times allocation blocked.
- [drain](1535647-drain.md): Number of times protocol drain functions were called.
- [mtypes](1535632-mtypes.md): An array of counts of each type of mbuf allocated.
- [mcfail](1535713-mcfail.md): Number of times m_copym failed.
- [mpfail](1535668-mpfail.md): Number of times m_pullup failed.
- [msize](1535673-msize.md): Length of an mbuf.
- [mclbytes](1535727-mclbytes.md): Length of an mbuf cluster.
- [minclsize](1535802-minclsize.md): Minimum length of data to allocate a cluster. Anything smaller than this should be placed in chained mbufs.
- [mlen](1535678-mlen.md): Length of data in an mbuf.
- [mhlen](1535691-mhlen.md): Length of data in an mbuf with a packet header.
- [bigclfree](1535733-bigclfree.md): Number of unused big clusters.
- [bigmclbytes](1535618-bigmclbytes.md): Length of a big mbuf cluster.
