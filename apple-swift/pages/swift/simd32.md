> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32](https://developer.apple.com/documentation/swift/simd32)

# SIMD32

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector of 32 scalar values.

## Declaration

```swift
@frozen struct SIMD32<Scalar> where Scalar : SIMDScalar
```

## Topics

### Operators

- [&\*(\_:\_:)](simd32/&_%28____%29-10d5p.md): Conforms when `Scalar` is `UInt`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-1xcvq.md): Conforms when `Scalar` is `Int16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-24w7p.md): Conforms when `Scalar` is `UInt8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-4nfb3.md): Conforms when `Scalar` is `Int32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-51nvg.md): Conforms when `Scalar` is `UInt64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-59umb.md): Conforms when `Scalar` is `UInt16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-5ehsq.md): Conforms when `Scalar` is `Int8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-6maed.md): Conforms when `Scalar` is `Int64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-6tid.md): Conforms when `Scalar` is `UInt32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd32/&_%28____%29-8r7y1.md): Conforms when `Scalar` is `Int`. The pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-2t3nr.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-2z0s7.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-4rx0a.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-5zxuu.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-72dnf.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-7hc0h.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-8nfzb.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-90j9c.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-99rfz.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd32/&_=%28____%29-9rpr2.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-1itt5.md): Conforms when `Scalar` is `Int32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-3btse.md): Conforms when `Scalar` is `UInt8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-3e43c.md): Conforms when `Scalar` is `Int64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-3gdux.md): Conforms when `Scalar` is `Int16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-4mxpb.md): Conforms when `Scalar` is `UInt16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-58lvj.md): Conforms when `Scalar` is `UInt`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-7y0wz.md): Conforms when `Scalar` is `Int8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-823au.md): Conforms when `Scalar` is `UInt32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-9wssy.md): Conforms when `Scalar` is `UInt64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd32/&+%28____%29-w70d.md): Conforms when `Scalar` is `Int`. The wrapping sum of two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-15cet.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-1o0yg.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-1v816.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-4s3z5.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-63764.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-6d53x.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-7s5ki.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-86txd.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-8zbds.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd32/&+=%28____%29-rmc.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-1fnzi.md): Conforms when `Scalar` is `UInt32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-2e698.md): Conforms when `Scalar` is `Int32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-378x.md): Conforms when `Scalar` is `UInt8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-3di3j.md): Conforms when `Scalar` is `UInt`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-4a5qw.md): Conforms when `Scalar` is `UInt16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-67lsa.md): Conforms when `Scalar` is `Int`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-7kezr.md): Conforms when `Scalar` is `Int64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-97vnn.md): Conforms when `Scalar` is `Int8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-9833k.md): Conforms when `Scalar` is `Int16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd32/&-%28____%29-pwyk.md): Conforms when `Scalar` is `UInt64`. The wrapping difference of two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-39zko.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-4juf3.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-546j7.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-61zaw.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-6en0q.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-767vd.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-8rceb.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-9huay.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-gu6o.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd32/&-=%28____%29-nlqy.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping difference of the two vectors.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-1zxtz.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-21n3w.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-26sgl.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-4aub6.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-4e94s.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-4pl1l.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-52pgf.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-55srg.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-5dol6.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-5lukx.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-5m9ya.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-6ia6g.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-6njpp.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-7xxuv.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-8270q.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-8nprl.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-92bkt.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-9u20d.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd32/'.!=%28____%29-9vk8l.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-14vwl.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-1d4ef.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-2j8za.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-33cdt.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-502vs.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-506zi.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-5kd05.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-60n8s.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-60r4n.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-6tfjq.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-7a71z.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-7kyv4.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-7qv2j.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-84g5l.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-8u9ke.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-93khl.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-958fg.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd32/'.==%28____%29-9p8mu.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd32/'.==%28____%29-rk9i.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise equality comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-147jo.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd32/'._%28____%29-15mq1.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd32/'._%28____%29-19g1c.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-1goth.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-21g9y.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-21vos.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd32/'._%28____%29-23gq6.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd32/'._%28____%29-2dze8.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd32/'._%28____%29-2iysy.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-2xk74.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd32/'._%28____%29-2ygq.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd32/'._%28____%29-3cu0a.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-3qif7.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-4421f.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-45fh5.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\>(\_:\_:)](simd32/'._%28____%29-49uz.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-532p4.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-5c99u.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\>(\_:\_:)](simd32/'._%28____%29-5jy6n.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd32/'._%28____%29-5muzp.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-5xye0.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd32/'._%28____%29-672ev.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-6in31.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd32/'._%28____%29-71pfo.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd32/'._%28____%29-73r8.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-87jt.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-89h8r.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-8n114.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-8vya7.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd32/'._%28____%29-92tlq.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd32/'._%28____%29-9e393.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-9fbf8.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd32/'._%28____%29-9u1rq.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-9w1u6.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd32/'._%28____%29-n7x0.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd32/'._%28____%29-o3rx.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd32/'._%28____%29-r6a5.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd32/'._%28____%29-x09f.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-11ora.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-18zfw.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-1jbkk.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-1pzc5.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-21kci.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-226zc.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2375k.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2bc16.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2ofnf.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2uri4.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2vp6k.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-2xf8y.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-2xrmp.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-2xto.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-37mit.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-3ib84.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-3x944.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-46gd9.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-523s9.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-5ado7.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-5or10.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-63lfc.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-64het.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-69fm2.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-6fsyy.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-6qme1.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-6rka6.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-6u29t.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-6wunc.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-74z9a.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-8k36x.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-9c9rj.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-9ksg6.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-9t2my.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd32/'._=%28____%29-crv1.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-dbt4.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-relh.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd32/'._=%28____%29-y30q.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.

### Initializers

- [init()](simd32/init%28%29.md): Creates a vector with zero in all lanes.
- [init(\_:)](simd32/init%28__%29-5imow.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of floating-point values.
- [init(\_:)](simd32/init%28__%29-8g4gm.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of integers.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](simd32/init%28________________________________________________________________%29.md): Creates a new vector from the given elements.
- [init(\_:rounding:)](simd32/init%28__rounding_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.
- [init(clamping:)](simd32/init%28clamping_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, clamping the values of the given vector’s elements if necessary.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-19jsh.md): Conforms when `Scalar` is `UInt`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-1asgj.md): Conforms when `Scalar` is `Int32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-1eppu.md): Conforms when `Scalar` is `Int`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-2ardj.md): Conforms when `Scalar` is `Int64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-3hnge.md): Conforms when `Scalar` is `UInt8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-471m3.md): Conforms when `Scalar` is `UInt64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-4zav.md): Conforms when `Scalar` is `UInt32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-509cl.md): Conforms when `Scalar` is `Float`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-56y3t.md): Conforms when `Scalar` is `Float16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-5tdrt.md): A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-951ax.md): Conforms when `Scalar` is `Int8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-9biv8.md): Conforms when `Scalar` is `Int16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-9kbcj.md): Conforms when `Scalar` is `Double`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd32/init%28lowhalf_highhalf_%29-xy6c.md): Conforms when `Scalar` is `UInt16`. A vector formed by concatenating lowHalf and highHalf.
- [init(repeating:)](simd32/init%28repeating_%29-2223r.md): Conforms when `Scalar` is `Int64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-235au.md): Conforms when `Scalar` is `UInt8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-32e9u.md): Conforms when `Scalar` is `Float16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-4d5ds.md): Conforms when `Scalar` is `Int8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-4f9ha.md): Conforms when `Scalar` is `Int32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-4uiif.md): Conforms when `Scalar` is `UInt32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-5l6wp.md): Conforms when `Scalar` is `Int16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-73er4.md): Conforms when `Scalar` is `Double`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-894lr.md): Conforms when `Scalar` is `Int`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-8nen7.md): Conforms when `Scalar` is `UInt`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-8qn7.md): Conforms when `Scalar` is `UInt64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-9hu2m.md): Conforms when `Scalar` is `UInt16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd32/init%28repeating_%29-q7f1.md): Conforms when `Scalar` is `Float`. A vector with the specified scalar in all lanes.
- [init(truncatingIfNeeded:)](simd32/init%28truncatingifneeded_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, truncating the bit patterns of the given vector’s elements if necessary.

### Instance Properties

- [evenHalf](simd32/evenhalf.md): A half-length vector made up of the even elements of the vector.
- [hashValue](simd32/hashvalue.md): The hash value.
- [highHalf](simd32/highhalf.md): A half-length vector made up of the high elements of the vector.
- [lowHalf](simd32/lowhalf.md): A half-length vector made up of the low elements of the vector.
- [oddHalf](simd32/oddhalf.md): A half-length vector made up of the odd elements of the vector.
- [scalarCount](simd32/scalarcount.md): The number of scalars in the vector.

### Subscripts

- [subscript(\_:)](simd32/subscript%28__%29.md): Accesses the scalar at the specified position.

### Type Aliases

- [SIMD32.ArrayLiteralElement](simd32/arrayliteralelement.md): The type of the elements of an array literal.
- [SIMD32.MaskStorage](simd32/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](simd32/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](simd32/equatable-implementations.md)
- [SIMD Implementations](simd32/simd-implementations.md)

## Relationships

### Conforms To

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
- [SIMD4](simd4.md): A vector of four scalar values.
- [SIMD8](simd8.md): A vector of eight scalar values.
- [SIMD16](simd16.md): A vector of 16 scalar values.
- [SIMD64](simd64.md): A vector of 64 scalar values.
