> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd4](https://developer.apple.com/documentation/swift/simd4)

# SIMD4

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector of four scalar values.

## Declaration

```swift
@frozen struct SIMD4<Scalar> where Scalar : SIMDScalar
```

## Topics

### Operators

- [&\*(\_:\_:)](simd4/&_%28____%29-2t3u3.md): Conforms when `Scalar` is `UInt`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-4mgas.md): Conforms when `Scalar` is `UInt8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-58o8b.md): Conforms when `Scalar` is `Int16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-58obf.md): Conforms when `Scalar` is `Int32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-6tcig.md): Conforms when `Scalar` is `UInt32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-8d18h.md): Conforms when `Scalar` is `Int64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-9500.md): Conforms when `Scalar` is `Int8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-95f9r.md): Conforms when `Scalar` is `UInt64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-9rqgl.md): Conforms when `Scalar` is `Int`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd4/&_%28____%29-9w4k9.md): Conforms when `Scalar` is `UInt16`. The pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-366ii.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-3rbko.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-44bys.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-5b0so.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-6lwed.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-6q14r.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-6xqb6.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-82jen.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-9ncfh.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd4/&_=%28____%29-gzto.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-1te60.md): Conforms when `Scalar` is `UInt8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-242rh.md): Conforms when `Scalar` is `Int16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-285ia.md): Conforms when `Scalar` is `UInt`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-36osx.md): Conforms when `Scalar` is `Int32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-5kcci.md): Conforms when `Scalar` is `Int8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-7lmra.md): Conforms when `Scalar` is `Int`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-882i.md): Conforms when `Scalar` is `Int64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-97dnc.md): Conforms when `Scalar` is `UInt32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-9ik7g.md): Conforms when `Scalar` is `UInt16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd4/&+%28____%29-m3ua.md): Conforms when `Scalar` is `UInt64`. The wrapping sum of two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-149yb.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-1noki.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-2of8k.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-2tfy3.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-39e7m.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-4prbm.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-6gj5j.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-74v45.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-97jca.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd4/&+=%28____%29-rjox.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping sum of the two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-15lhe.md): Conforms when `Scalar` is `Int32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-16vdb.md): Conforms when `Scalar` is `Int`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-2k023.md): Conforms when `Scalar` is `UInt16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-2zf5s.md): Conforms when `Scalar` is `Int16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-68jav.md): Conforms when `Scalar` is `UInt8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-6c13i.md): Conforms when `Scalar` is `Int64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-7lw64.md): Conforms when `Scalar` is `UInt`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-7mu38.md): Conforms when `Scalar` is `UInt32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-8dyvm.md): Conforms when `Scalar` is `Int8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd4/&-%28____%29-8qlsp.md): Conforms when `Scalar` is `UInt64`. The wrapping difference of two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-246za.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-2c8ti.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-3i9au.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-3sdor.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-4h8d2.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-4wv73.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-55ra6.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-5lgiw.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-6o1tt.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd4/&-=%28____%29-7i51c.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping difference of the two vectors.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-1dfla.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-20ki6.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-2zk5p.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-3dpb9.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-3za3s.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-4nhev.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-4rkvj.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-5989r.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-7kjv3.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-7qjh3.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-80l98.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-8fn4p.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-8grg9.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-8q623.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-8vtwt.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-9cb1n.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-9q0rp.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-9yqz5.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd4/'.!=%28____%29-ruxz.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-1045v.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-1g3vu.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-1gpsx.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-25zmi.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-2k4vk.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-2nsel.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-4546s.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-5c0gi.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-6f4lp.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-6kpb9.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-6ob3q.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-6stsy.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-7gbyi.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-7h40q.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-83hrk.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-86kdt.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-94etw.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd4/'.==%28____%29-9e46i.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd4/'.==%28____%29-9x68v.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.\<(\_:\_:)](simd4/'._%28____%29-11dvk.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd4/'._%28____%29-14oh6.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd4/'._%28____%29-1hia8.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd4/'._%28____%29-1jqtu.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-1jwzn.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd4/'._%28____%29-1rsvy.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-1ut8t.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-1z0m8.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-2gccv.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-2wgwx.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-3e3jg.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-3fphg.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-3hybf.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd4/'._%28____%29-3nkri.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd4/'._%28____%29-3wevl.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-4303j.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-4gap2.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-4ihrd.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd4/'._%28____%29-4kq3p.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd4/'._%28____%29-4na4r.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd4/'._%28____%29-4wwop.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-5k3cv.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd4/'._%28____%29-5omj.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd4/'._%28____%29-5ywlq.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\>(\_:\_:)](simd4/'._%28____%29-6lat8.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd4/'._%28____%29-6re1z.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd4/'._%28____%29-6ugy1.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-7bg6m.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd4/'._%28____%29-7yul1.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-8wq2h.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-9ba0f.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-9hciq.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-fiw6.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-ghlz.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd4/'._%28____%29-mda6.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd4/'._%28____%29-nwzo.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd4/'._%28____%29-s2dg.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd4/'._%28____%29-zqkc.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-11lr3.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-14iae.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-15866.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-1c6si.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-1l3xg.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-1v1dy.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-1z1op.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-23qy3.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-2821y.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-2j03q.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-2ltkw.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-2p2sm.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-2uq91.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-3bs97.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-3p65t.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-4koys.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-4q6oc.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-4t218.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-59ik5.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-5llp8.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-5qz25.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-5t5al.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-66txr.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-6ft8e.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-6izov.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-6m8mz.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-6nsbw.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-6tt5n.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-6xt5h.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-74im3.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-7n61o.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-81jth.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-8d4de.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-8qkve.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-8r25e.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-8xoj5.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd4/'._=%28____%29-96ya4.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd4/'._=%28____%29-rt7g.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.

### Initializers

- [init()](simd4/init%28%29.md): Creates a vector with zero in all lanes.
- [init(\_:)](simd4/init%28__%29-1dme2.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of integers.
- [init(\_:)](simd4/init%28__%29-1f9vo.md): Conforms when `Scalar` is `Float`.
- [init(\_:)](simd4/init%28__%29-1tyne.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial size.
- [init(\_:)](simd4/init%28__%29-2frw5.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of floating-point values.
- [init(\_:)](simd4/init%28__%29-2lh73.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial rotation.
- [init(\_:)](simd4/init%28__%29-2wwuh.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial spherical coordinates structure .
- [init(\_:)](simd4/init%28__%29-30hiv.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial vector.
- [init(\_:)](simd4/init%28__%29-3pxce.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial point.
- [init(\_:)](simd4/init%28__%29-5dnpp.md): Conforms when `Scalar` is `Double`.
- [init(\_:)](simd4/init%28__%29-5emgw.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial vector.
- [init(\_:)](simd4/init%28__%29-5sq49.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial point.
- [init(\_:)](simd4/init%28__%29-6pjsb.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial rotation.
- [init(\_:)](simd4/init%28__%29-8kyv.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial spherical coordinates structure .
- [init(\_:)](simd4/init%28__%29-97pz3.md): Conforms when `Scalar` is `Float`. Creates a simd packed vector from a Spatial rotation axis.
- [init(\_:)](simd4/init%28__%29-9rzwt.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial rotation axis.
- [init(\_:)](simd4/init%28__%29-hfd1.md): Conforms when `Scalar` is `Double`. Creates a simd packed vector from a Spatial size.
- [init(\_:\_:)](simd4/init%28____%29.md): Conforms when `Scalar` conforms to `SIMDScalar`. A four-element vector created by appending a scalar to a three-element vector.
- [init(\_:\_:\_:\_:)](simd4/init%28________%29.md): Creates a new vector from the given elements.
- [init(\_:rounding:)](simd4/init%28__rounding_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.
- [init(clamping:)](simd4/init%28clamping_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, clamping the values of the given vector’s elements if necessary.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-17nrt.md): Conforms when `Scalar` is `Int16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-1mfgu.md): A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-1mnu4.md): Conforms when `Scalar` is `Int64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-1vinm.md): Conforms when `Scalar` is `Int8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-2mvkj.md): Conforms when `Scalar` is `UInt32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-47i96.md): Conforms when `Scalar` is `UInt16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-5ye5o.md): Conforms when `Scalar` is `UInt64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-66418.md): Conforms when `Scalar` is `Double`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-7rr1m.md): Conforms when `Scalar` is `UInt`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-8crbu.md): Conforms when `Scalar` is `Float`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-8ojwi.md): Conforms when `Scalar` is `Float16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-8r3d7.md): Conforms when `Scalar` is `Int`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-8w1ua.md): Conforms when `Scalar` is `UInt8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd4/init%28lowhalf_highhalf_%29-9uxst.md): Conforms when `Scalar` is `Int32`. A vector formed by concatenating lowHalf and highHalf.
- [init(repeating:)](simd4/init%28repeating_%29-3b6vk.md): Conforms when `Scalar` is `UInt16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-3cv3r.md): Conforms when `Scalar` is `UInt8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-3jjxm.md): Conforms when `Scalar` is `UInt`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-4ghrb.md): Conforms when `Scalar` is `Int`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-4vag6.md): Conforms when `Scalar` is `Int32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-4xdm7.md): Conforms when `Scalar` is `Float16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-4ylyi.md): Conforms when `Scalar` is `UInt32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-6z4nu.md): Conforms when `Scalar` is `UInt64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-70muy.md): Conforms when `Scalar` is `Float`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-8z86u.md): Conforms when `Scalar` is `Int16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-9qofv.md): Conforms when `Scalar` is `Int64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-erxu.md): Conforms when `Scalar` is `Int8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd4/init%28repeating_%29-gu1y.md): Conforms when `Scalar` is `Double`. A vector with the specified scalar in all lanes.
- [init(truncatingIfNeeded:)](simd4/init%28truncatingifneeded_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, truncating the bit patterns of the given vector’s elements if necessary.
- [init(x:y:z:w:)](simd4/init%28x_y_z_w_%29.md): Creates a new vector from the given elements.

### Instance Properties

- [evenHalf](simd4/evenhalf.md): A half-length vector made up of the even elements of the vector.
- [hashValue](simd4/hashvalue.md): The hash value.
- [highHalf](simd4/highhalf.md): A half-length vector made up of the high elements of the vector.
- [lowHalf](simd4/lowhalf.md): A half-length vector made up of the low elements of the vector.
- [oddHalf](simd4/oddhalf.md): A half-length vector made up of the odd elements of the vector.
- [scalarCount](simd4/scalarcount.md): The number of scalars in the vector.
- [w](simd4/w.md): The fourth element of the vector.
- [x](simd4/x.md): The first element of the vector.
- [y](simd4/y.md): The second element of the vector.
- [z](simd4/z.md): The third element of the vector.

### Subscripts

- [subscript(\_:)](simd4/subscript%28__%29.md): Accesses the scalar at the specified position.

### Type Aliases

- [SIMD4.ArrayLiteralElement](simd4/arrayliteralelement.md): The type of the elements of an array literal.
- [SIMD4.MaskStorage](simd4/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](simd4/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](simd4/equatable-implementations.md)
- [SIMD Implementations](simd4/simd-implementations.md)

## Relationships

### Conforms To

- [AnimatableData](https://developer.apple.com/documentation/realitykit/animatabledata)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [BitwiseCopyable](bitwisecopyable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [SIMD](simd.md)
- [SIMDStorage](simdstorage.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### SIMD Vectors

- [SIMD2](simd2.md): A vector of two scalar values.
- [SIMD3](simd3.md): A vector of three scalar values.
- [SIMD8](simd8.md): A vector of eight scalar values.
- [SIMD16](simd16.md): A vector of 16 scalar values.
- [SIMD32](simd32.md): A vector of 32 scalar values.
- [SIMD64](simd64.md): A vector of 64 scalar values.
